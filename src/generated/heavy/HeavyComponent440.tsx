'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly440<T> = T extends (infer U)[]
  ? DeepReadonlyArray440<U>
  : T extends object
  ? DeepReadonlyObject440<T>
  : T;

interface DeepReadonlyArray440<T> extends ReadonlyArray<DeepReadonly440<T>> {}

type DeepReadonlyObject440<T> = {
  readonly [P in keyof T]: DeepReadonly440<T[P]>;
};

type UnionToIntersection440<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf440<T> = UnionToIntersection440<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push440<T extends unknown[], V> = [...T, V];

type TuplifyUnion440<T, L = LastOf440<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push440<TuplifyUnion440<Exclude<T, L>>, L>;

type DeepPartial440<T> = T extends object
  ? { [P in keyof T]?: DeepPartial440<T[P]> }
  : T;

type Paths440<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join440<K, Paths440<T[K], Prev440[D]>> : never }[keyof T]
  : never;

type Prev440 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join440<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig440 {
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

type ConfigPaths440 = Paths440<NestedConfig440>;

interface HeavyProps440 {
  config: DeepPartial440<NestedConfig440>;
  path?: ConfigPaths440;
}

const HeavyComponent440 = memo(function HeavyComponent440({ config }: HeavyProps440) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 440) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-440 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H440: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent440.displayName = 'HeavyComponent440';
export default HeavyComponent440;
