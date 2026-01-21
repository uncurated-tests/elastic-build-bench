'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly226<T> = T extends (infer U)[]
  ? DeepReadonlyArray226<U>
  : T extends object
  ? DeepReadonlyObject226<T>
  : T;

interface DeepReadonlyArray226<T> extends ReadonlyArray<DeepReadonly226<T>> {}

type DeepReadonlyObject226<T> = {
  readonly [P in keyof T]: DeepReadonly226<T[P]>;
};

type UnionToIntersection226<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf226<T> = UnionToIntersection226<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push226<T extends unknown[], V> = [...T, V];

type TuplifyUnion226<T, L = LastOf226<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push226<TuplifyUnion226<Exclude<T, L>>, L>;

type DeepPartial226<T> = T extends object
  ? { [P in keyof T]?: DeepPartial226<T[P]> }
  : T;

type Paths226<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join226<K, Paths226<T[K], Prev226[D]>> : never }[keyof T]
  : never;

type Prev226 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join226<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig226 {
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

type ConfigPaths226 = Paths226<NestedConfig226>;

interface HeavyProps226 {
  config: DeepPartial226<NestedConfig226>;
  path?: ConfigPaths226;
}

const HeavyComponent226 = memo(function HeavyComponent226({ config }: HeavyProps226) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 226) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-226 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H226: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent226.displayName = 'HeavyComponent226';
export default HeavyComponent226;
