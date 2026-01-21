'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2993<T> = T extends (infer U)[]
  ? DeepReadonlyArray2993<U>
  : T extends object
  ? DeepReadonlyObject2993<T>
  : T;

interface DeepReadonlyArray2993<T> extends ReadonlyArray<DeepReadonly2993<T>> {}

type DeepReadonlyObject2993<T> = {
  readonly [P in keyof T]: DeepReadonly2993<T[P]>;
};

type UnionToIntersection2993<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2993<T> = UnionToIntersection2993<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2993<T extends unknown[], V> = [...T, V];

type TuplifyUnion2993<T, L = LastOf2993<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2993<TuplifyUnion2993<Exclude<T, L>>, L>;

type DeepPartial2993<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2993<T[P]> }
  : T;

type Paths2993<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2993<K, Paths2993<T[K], Prev2993[D]>> : never }[keyof T]
  : never;

type Prev2993 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2993<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2993 {
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

type ConfigPaths2993 = Paths2993<NestedConfig2993>;

interface HeavyProps2993 {
  config: DeepPartial2993<NestedConfig2993>;
  path?: ConfigPaths2993;
}

const HeavyComponent2993 = memo(function HeavyComponent2993({ config }: HeavyProps2993) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2993) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2993 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2993: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2993.displayName = 'HeavyComponent2993';
export default HeavyComponent2993;
