'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2981<T> = T extends (infer U)[]
  ? DeepReadonlyArray2981<U>
  : T extends object
  ? DeepReadonlyObject2981<T>
  : T;

interface DeepReadonlyArray2981<T> extends ReadonlyArray<DeepReadonly2981<T>> {}

type DeepReadonlyObject2981<T> = {
  readonly [P in keyof T]: DeepReadonly2981<T[P]>;
};

type UnionToIntersection2981<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2981<T> = UnionToIntersection2981<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2981<T extends unknown[], V> = [...T, V];

type TuplifyUnion2981<T, L = LastOf2981<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2981<TuplifyUnion2981<Exclude<T, L>>, L>;

type DeepPartial2981<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2981<T[P]> }
  : T;

type Paths2981<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2981<K, Paths2981<T[K], Prev2981[D]>> : never }[keyof T]
  : never;

type Prev2981 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2981<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2981 {
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

type ConfigPaths2981 = Paths2981<NestedConfig2981>;

interface HeavyProps2981 {
  config: DeepPartial2981<NestedConfig2981>;
  path?: ConfigPaths2981;
}

const HeavyComponent2981 = memo(function HeavyComponent2981({ config }: HeavyProps2981) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2981) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2981 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2981: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2981.displayName = 'HeavyComponent2981';
export default HeavyComponent2981;
