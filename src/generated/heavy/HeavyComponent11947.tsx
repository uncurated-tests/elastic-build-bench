'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11947<T> = T extends (infer U)[]
  ? DeepReadonlyArray11947<U>
  : T extends object
  ? DeepReadonlyObject11947<T>
  : T;

interface DeepReadonlyArray11947<T> extends ReadonlyArray<DeepReadonly11947<T>> {}

type DeepReadonlyObject11947<T> = {
  readonly [P in keyof T]: DeepReadonly11947<T[P]>;
};

type UnionToIntersection11947<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11947<T> = UnionToIntersection11947<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11947<T extends unknown[], V> = [...T, V];

type TuplifyUnion11947<T, L = LastOf11947<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11947<TuplifyUnion11947<Exclude<T, L>>, L>;

type DeepPartial11947<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11947<T[P]> }
  : T;

type Paths11947<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11947<K, Paths11947<T[K], Prev11947[D]>> : never }[keyof T]
  : never;

type Prev11947 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11947<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11947 {
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

type ConfigPaths11947 = Paths11947<NestedConfig11947>;

interface HeavyProps11947 {
  config: DeepPartial11947<NestedConfig11947>;
  path?: ConfigPaths11947;
}

const HeavyComponent11947 = memo(function HeavyComponent11947({ config }: HeavyProps11947) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11947) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11947 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11947: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11947.displayName = 'HeavyComponent11947';
export default HeavyComponent11947;
