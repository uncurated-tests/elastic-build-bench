'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2260<T> = T extends (infer U)[]
  ? DeepReadonlyArray2260<U>
  : T extends object
  ? DeepReadonlyObject2260<T>
  : T;

interface DeepReadonlyArray2260<T> extends ReadonlyArray<DeepReadonly2260<T>> {}

type DeepReadonlyObject2260<T> = {
  readonly [P in keyof T]: DeepReadonly2260<T[P]>;
};

type UnionToIntersection2260<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2260<T> = UnionToIntersection2260<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2260<T extends unknown[], V> = [...T, V];

type TuplifyUnion2260<T, L = LastOf2260<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2260<TuplifyUnion2260<Exclude<T, L>>, L>;

type DeepPartial2260<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2260<T[P]> }
  : T;

type Paths2260<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2260<K, Paths2260<T[K], Prev2260[D]>> : never }[keyof T]
  : never;

type Prev2260 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2260<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2260 {
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

type ConfigPaths2260 = Paths2260<NestedConfig2260>;

interface HeavyProps2260 {
  config: DeepPartial2260<NestedConfig2260>;
  path?: ConfigPaths2260;
}

const HeavyComponent2260 = memo(function HeavyComponent2260({ config }: HeavyProps2260) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2260) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2260 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2260: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2260.displayName = 'HeavyComponent2260';
export default HeavyComponent2260;
