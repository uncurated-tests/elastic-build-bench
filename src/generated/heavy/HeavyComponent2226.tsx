'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2226<T> = T extends (infer U)[]
  ? DeepReadonlyArray2226<U>
  : T extends object
  ? DeepReadonlyObject2226<T>
  : T;

interface DeepReadonlyArray2226<T> extends ReadonlyArray<DeepReadonly2226<T>> {}

type DeepReadonlyObject2226<T> = {
  readonly [P in keyof T]: DeepReadonly2226<T[P]>;
};

type UnionToIntersection2226<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2226<T> = UnionToIntersection2226<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2226<T extends unknown[], V> = [...T, V];

type TuplifyUnion2226<T, L = LastOf2226<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2226<TuplifyUnion2226<Exclude<T, L>>, L>;

type DeepPartial2226<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2226<T[P]> }
  : T;

type Paths2226<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2226<K, Paths2226<T[K], Prev2226[D]>> : never }[keyof T]
  : never;

type Prev2226 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2226<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2226 {
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

type ConfigPaths2226 = Paths2226<NestedConfig2226>;

interface HeavyProps2226 {
  config: DeepPartial2226<NestedConfig2226>;
  path?: ConfigPaths2226;
}

const HeavyComponent2226 = memo(function HeavyComponent2226({ config }: HeavyProps2226) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2226) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2226 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2226: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2226.displayName = 'HeavyComponent2226';
export default HeavyComponent2226;
