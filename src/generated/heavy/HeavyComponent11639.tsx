'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11639<T> = T extends (infer U)[]
  ? DeepReadonlyArray11639<U>
  : T extends object
  ? DeepReadonlyObject11639<T>
  : T;

interface DeepReadonlyArray11639<T> extends ReadonlyArray<DeepReadonly11639<T>> {}

type DeepReadonlyObject11639<T> = {
  readonly [P in keyof T]: DeepReadonly11639<T[P]>;
};

type UnionToIntersection11639<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11639<T> = UnionToIntersection11639<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11639<T extends unknown[], V> = [...T, V];

type TuplifyUnion11639<T, L = LastOf11639<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11639<TuplifyUnion11639<Exclude<T, L>>, L>;

type DeepPartial11639<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11639<T[P]> }
  : T;

type Paths11639<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11639<K, Paths11639<T[K], Prev11639[D]>> : never }[keyof T]
  : never;

type Prev11639 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11639<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11639 {
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

type ConfigPaths11639 = Paths11639<NestedConfig11639>;

interface HeavyProps11639 {
  config: DeepPartial11639<NestedConfig11639>;
  path?: ConfigPaths11639;
}

const HeavyComponent11639 = memo(function HeavyComponent11639({ config }: HeavyProps11639) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11639) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11639 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11639: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11639.displayName = 'HeavyComponent11639';
export default HeavyComponent11639;
