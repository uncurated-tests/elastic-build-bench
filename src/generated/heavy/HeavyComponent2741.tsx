'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2741<T> = T extends (infer U)[]
  ? DeepReadonlyArray2741<U>
  : T extends object
  ? DeepReadonlyObject2741<T>
  : T;

interface DeepReadonlyArray2741<T> extends ReadonlyArray<DeepReadonly2741<T>> {}

type DeepReadonlyObject2741<T> = {
  readonly [P in keyof T]: DeepReadonly2741<T[P]>;
};

type UnionToIntersection2741<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2741<T> = UnionToIntersection2741<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2741<T extends unknown[], V> = [...T, V];

type TuplifyUnion2741<T, L = LastOf2741<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2741<TuplifyUnion2741<Exclude<T, L>>, L>;

type DeepPartial2741<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2741<T[P]> }
  : T;

type Paths2741<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2741<K, Paths2741<T[K], Prev2741[D]>> : never }[keyof T]
  : never;

type Prev2741 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2741<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2741 {
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

type ConfigPaths2741 = Paths2741<NestedConfig2741>;

interface HeavyProps2741 {
  config: DeepPartial2741<NestedConfig2741>;
  path?: ConfigPaths2741;
}

const HeavyComponent2741 = memo(function HeavyComponent2741({ config }: HeavyProps2741) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2741) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2741 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2741: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2741.displayName = 'HeavyComponent2741';
export default HeavyComponent2741;
