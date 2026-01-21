'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11561<T> = T extends (infer U)[]
  ? DeepReadonlyArray11561<U>
  : T extends object
  ? DeepReadonlyObject11561<T>
  : T;

interface DeepReadonlyArray11561<T> extends ReadonlyArray<DeepReadonly11561<T>> {}

type DeepReadonlyObject11561<T> = {
  readonly [P in keyof T]: DeepReadonly11561<T[P]>;
};

type UnionToIntersection11561<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11561<T> = UnionToIntersection11561<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11561<T extends unknown[], V> = [...T, V];

type TuplifyUnion11561<T, L = LastOf11561<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11561<TuplifyUnion11561<Exclude<T, L>>, L>;

type DeepPartial11561<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11561<T[P]> }
  : T;

type Paths11561<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11561<K, Paths11561<T[K], Prev11561[D]>> : never }[keyof T]
  : never;

type Prev11561 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11561<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11561 {
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

type ConfigPaths11561 = Paths11561<NestedConfig11561>;

interface HeavyProps11561 {
  config: DeepPartial11561<NestedConfig11561>;
  path?: ConfigPaths11561;
}

const HeavyComponent11561 = memo(function HeavyComponent11561({ config }: HeavyProps11561) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11561) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11561 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11561: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11561.displayName = 'HeavyComponent11561';
export default HeavyComponent11561;
