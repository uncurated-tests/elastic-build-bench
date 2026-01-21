'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11037<T> = T extends (infer U)[]
  ? DeepReadonlyArray11037<U>
  : T extends object
  ? DeepReadonlyObject11037<T>
  : T;

interface DeepReadonlyArray11037<T> extends ReadonlyArray<DeepReadonly11037<T>> {}

type DeepReadonlyObject11037<T> = {
  readonly [P in keyof T]: DeepReadonly11037<T[P]>;
};

type UnionToIntersection11037<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11037<T> = UnionToIntersection11037<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11037<T extends unknown[], V> = [...T, V];

type TuplifyUnion11037<T, L = LastOf11037<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11037<TuplifyUnion11037<Exclude<T, L>>, L>;

type DeepPartial11037<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11037<T[P]> }
  : T;

type Paths11037<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11037<K, Paths11037<T[K], Prev11037[D]>> : never }[keyof T]
  : never;

type Prev11037 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11037<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11037 {
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

type ConfigPaths11037 = Paths11037<NestedConfig11037>;

interface HeavyProps11037 {
  config: DeepPartial11037<NestedConfig11037>;
  path?: ConfigPaths11037;
}

const HeavyComponent11037 = memo(function HeavyComponent11037({ config }: HeavyProps11037) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11037) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11037 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11037: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11037.displayName = 'HeavyComponent11037';
export default HeavyComponent11037;
