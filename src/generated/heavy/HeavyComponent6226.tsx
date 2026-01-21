'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6226<T> = T extends (infer U)[]
  ? DeepReadonlyArray6226<U>
  : T extends object
  ? DeepReadonlyObject6226<T>
  : T;

interface DeepReadonlyArray6226<T> extends ReadonlyArray<DeepReadonly6226<T>> {}

type DeepReadonlyObject6226<T> = {
  readonly [P in keyof T]: DeepReadonly6226<T[P]>;
};

type UnionToIntersection6226<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6226<T> = UnionToIntersection6226<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6226<T extends unknown[], V> = [...T, V];

type TuplifyUnion6226<T, L = LastOf6226<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6226<TuplifyUnion6226<Exclude<T, L>>, L>;

type DeepPartial6226<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6226<T[P]> }
  : T;

type Paths6226<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6226<K, Paths6226<T[K], Prev6226[D]>> : never }[keyof T]
  : never;

type Prev6226 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6226<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6226 {
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

type ConfigPaths6226 = Paths6226<NestedConfig6226>;

interface HeavyProps6226 {
  config: DeepPartial6226<NestedConfig6226>;
  path?: ConfigPaths6226;
}

const HeavyComponent6226 = memo(function HeavyComponent6226({ config }: HeavyProps6226) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6226) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6226 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6226: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6226.displayName = 'HeavyComponent6226';
export default HeavyComponent6226;
