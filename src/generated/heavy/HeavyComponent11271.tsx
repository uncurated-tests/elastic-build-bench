'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11271<T> = T extends (infer U)[]
  ? DeepReadonlyArray11271<U>
  : T extends object
  ? DeepReadonlyObject11271<T>
  : T;

interface DeepReadonlyArray11271<T> extends ReadonlyArray<DeepReadonly11271<T>> {}

type DeepReadonlyObject11271<T> = {
  readonly [P in keyof T]: DeepReadonly11271<T[P]>;
};

type UnionToIntersection11271<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11271<T> = UnionToIntersection11271<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11271<T extends unknown[], V> = [...T, V];

type TuplifyUnion11271<T, L = LastOf11271<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11271<TuplifyUnion11271<Exclude<T, L>>, L>;

type DeepPartial11271<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11271<T[P]> }
  : T;

type Paths11271<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11271<K, Paths11271<T[K], Prev11271[D]>> : never }[keyof T]
  : never;

type Prev11271 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11271<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11271 {
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

type ConfigPaths11271 = Paths11271<NestedConfig11271>;

interface HeavyProps11271 {
  config: DeepPartial11271<NestedConfig11271>;
  path?: ConfigPaths11271;
}

const HeavyComponent11271 = memo(function HeavyComponent11271({ config }: HeavyProps11271) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11271) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11271 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11271: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11271.displayName = 'HeavyComponent11271';
export default HeavyComponent11271;
