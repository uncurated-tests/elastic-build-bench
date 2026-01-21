'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11628<T> = T extends (infer U)[]
  ? DeepReadonlyArray11628<U>
  : T extends object
  ? DeepReadonlyObject11628<T>
  : T;

interface DeepReadonlyArray11628<T> extends ReadonlyArray<DeepReadonly11628<T>> {}

type DeepReadonlyObject11628<T> = {
  readonly [P in keyof T]: DeepReadonly11628<T[P]>;
};

type UnionToIntersection11628<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11628<T> = UnionToIntersection11628<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11628<T extends unknown[], V> = [...T, V];

type TuplifyUnion11628<T, L = LastOf11628<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11628<TuplifyUnion11628<Exclude<T, L>>, L>;

type DeepPartial11628<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11628<T[P]> }
  : T;

type Paths11628<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11628<K, Paths11628<T[K], Prev11628[D]>> : never }[keyof T]
  : never;

type Prev11628 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11628<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11628 {
  level1: {
    level2: {
      level3: {
        value: string;
        count: number;
        enabled: boolean;
        items: Array<{ id: number; name: string }>;
      };
    };
  };
}

type ConfigPaths11628 = Paths11628<NestedConfig11628>;

interface HeavyProps11628 {
  config: DeepPartial11628<NestedConfig11628>;
  path?: ConfigPaths11628;
}

const HeavyComponent11628 = memo(function HeavyComponent11628({ config }: HeavyProps11628) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11628) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11628 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11628: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11628.displayName = 'HeavyComponent11628';
export default HeavyComponent11628;
