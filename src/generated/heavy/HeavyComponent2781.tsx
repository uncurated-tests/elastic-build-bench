'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2781<T> = T extends (infer U)[]
  ? DeepReadonlyArray2781<U>
  : T extends object
  ? DeepReadonlyObject2781<T>
  : T;

interface DeepReadonlyArray2781<T> extends ReadonlyArray<DeepReadonly2781<T>> {}

type DeepReadonlyObject2781<T> = {
  readonly [P in keyof T]: DeepReadonly2781<T[P]>;
};

type UnionToIntersection2781<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2781<T> = UnionToIntersection2781<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2781<T extends unknown[], V> = [...T, V];

type TuplifyUnion2781<T, L = LastOf2781<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2781<TuplifyUnion2781<Exclude<T, L>>, L>;

type DeepPartial2781<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2781<T[P]> }
  : T;

type Paths2781<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2781<K, Paths2781<T[K], Prev2781[D]>> : never }[keyof T]
  : never;

type Prev2781 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2781<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2781 {
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

type ConfigPaths2781 = Paths2781<NestedConfig2781>;

interface HeavyProps2781 {
  config: DeepPartial2781<NestedConfig2781>;
  path?: ConfigPaths2781;
}

const HeavyComponent2781 = memo(function HeavyComponent2781({ config }: HeavyProps2781) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2781) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2781 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2781: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2781.displayName = 'HeavyComponent2781';
export default HeavyComponent2781;
