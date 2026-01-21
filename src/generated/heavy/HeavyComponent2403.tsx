'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2403<T> = T extends (infer U)[]
  ? DeepReadonlyArray2403<U>
  : T extends object
  ? DeepReadonlyObject2403<T>
  : T;

interface DeepReadonlyArray2403<T> extends ReadonlyArray<DeepReadonly2403<T>> {}

type DeepReadonlyObject2403<T> = {
  readonly [P in keyof T]: DeepReadonly2403<T[P]>;
};

type UnionToIntersection2403<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2403<T> = UnionToIntersection2403<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2403<T extends unknown[], V> = [...T, V];

type TuplifyUnion2403<T, L = LastOf2403<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2403<TuplifyUnion2403<Exclude<T, L>>, L>;

type DeepPartial2403<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2403<T[P]> }
  : T;

type Paths2403<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2403<K, Paths2403<T[K], Prev2403[D]>> : never }[keyof T]
  : never;

type Prev2403 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2403<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2403 {
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

type ConfigPaths2403 = Paths2403<NestedConfig2403>;

interface HeavyProps2403 {
  config: DeepPartial2403<NestedConfig2403>;
  path?: ConfigPaths2403;
}

const HeavyComponent2403 = memo(function HeavyComponent2403({ config }: HeavyProps2403) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2403) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2403 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2403: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2403.displayName = 'HeavyComponent2403';
export default HeavyComponent2403;
