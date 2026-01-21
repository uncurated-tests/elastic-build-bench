'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly102<T> = T extends (infer U)[]
  ? DeepReadonlyArray102<U>
  : T extends object
  ? DeepReadonlyObject102<T>
  : T;

interface DeepReadonlyArray102<T> extends ReadonlyArray<DeepReadonly102<T>> {}

type DeepReadonlyObject102<T> = {
  readonly [P in keyof T]: DeepReadonly102<T[P]>;
};

type UnionToIntersection102<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf102<T> = UnionToIntersection102<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push102<T extends unknown[], V> = [...T, V];

type TuplifyUnion102<T, L = LastOf102<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push102<TuplifyUnion102<Exclude<T, L>>, L>;

type DeepPartial102<T> = T extends object
  ? { [P in keyof T]?: DeepPartial102<T[P]> }
  : T;

type Paths102<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join102<K, Paths102<T[K], Prev102[D]>> : never }[keyof T]
  : never;

type Prev102 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join102<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig102 {
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

type ConfigPaths102 = Paths102<NestedConfig102>;

interface HeavyProps102 {
  config: DeepPartial102<NestedConfig102>;
  path?: ConfigPaths102;
}

const HeavyComponent102 = memo(function HeavyComponent102({ config }: HeavyProps102) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 102) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-102 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H102: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent102.displayName = 'HeavyComponent102';
export default HeavyComponent102;
