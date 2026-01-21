'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4818<T> = T extends (infer U)[]
  ? DeepReadonlyArray4818<U>
  : T extends object
  ? DeepReadonlyObject4818<T>
  : T;

interface DeepReadonlyArray4818<T> extends ReadonlyArray<DeepReadonly4818<T>> {}

type DeepReadonlyObject4818<T> = {
  readonly [P in keyof T]: DeepReadonly4818<T[P]>;
};

type UnionToIntersection4818<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4818<T> = UnionToIntersection4818<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4818<T extends unknown[], V> = [...T, V];

type TuplifyUnion4818<T, L = LastOf4818<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4818<TuplifyUnion4818<Exclude<T, L>>, L>;

type DeepPartial4818<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4818<T[P]> }
  : T;

type Paths4818<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4818<K, Paths4818<T[K], Prev4818[D]>> : never }[keyof T]
  : never;

type Prev4818 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4818<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4818 {
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

type ConfigPaths4818 = Paths4818<NestedConfig4818>;

interface HeavyProps4818 {
  config: DeepPartial4818<NestedConfig4818>;
  path?: ConfigPaths4818;
}

const HeavyComponent4818 = memo(function HeavyComponent4818({ config }: HeavyProps4818) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4818) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4818 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4818: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4818.displayName = 'HeavyComponent4818';
export default HeavyComponent4818;
