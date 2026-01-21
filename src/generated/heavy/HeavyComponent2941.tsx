'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2941<T> = T extends (infer U)[]
  ? DeepReadonlyArray2941<U>
  : T extends object
  ? DeepReadonlyObject2941<T>
  : T;

interface DeepReadonlyArray2941<T> extends ReadonlyArray<DeepReadonly2941<T>> {}

type DeepReadonlyObject2941<T> = {
  readonly [P in keyof T]: DeepReadonly2941<T[P]>;
};

type UnionToIntersection2941<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2941<T> = UnionToIntersection2941<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2941<T extends unknown[], V> = [...T, V];

type TuplifyUnion2941<T, L = LastOf2941<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2941<TuplifyUnion2941<Exclude<T, L>>, L>;

type DeepPartial2941<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2941<T[P]> }
  : T;

type Paths2941<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2941<K, Paths2941<T[K], Prev2941[D]>> : never }[keyof T]
  : never;

type Prev2941 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2941<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2941 {
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

type ConfigPaths2941 = Paths2941<NestedConfig2941>;

interface HeavyProps2941 {
  config: DeepPartial2941<NestedConfig2941>;
  path?: ConfigPaths2941;
}

const HeavyComponent2941 = memo(function HeavyComponent2941({ config }: HeavyProps2941) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2941) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2941 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2941: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2941.displayName = 'HeavyComponent2941';
export default HeavyComponent2941;
