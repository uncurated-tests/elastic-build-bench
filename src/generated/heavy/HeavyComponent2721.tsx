'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2721<T> = T extends (infer U)[]
  ? DeepReadonlyArray2721<U>
  : T extends object
  ? DeepReadonlyObject2721<T>
  : T;

interface DeepReadonlyArray2721<T> extends ReadonlyArray<DeepReadonly2721<T>> {}

type DeepReadonlyObject2721<T> = {
  readonly [P in keyof T]: DeepReadonly2721<T[P]>;
};

type UnionToIntersection2721<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2721<T> = UnionToIntersection2721<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2721<T extends unknown[], V> = [...T, V];

type TuplifyUnion2721<T, L = LastOf2721<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2721<TuplifyUnion2721<Exclude<T, L>>, L>;

type DeepPartial2721<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2721<T[P]> }
  : T;

type Paths2721<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2721<K, Paths2721<T[K], Prev2721[D]>> : never }[keyof T]
  : never;

type Prev2721 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2721<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2721 {
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

type ConfigPaths2721 = Paths2721<NestedConfig2721>;

interface HeavyProps2721 {
  config: DeepPartial2721<NestedConfig2721>;
  path?: ConfigPaths2721;
}

const HeavyComponent2721 = memo(function HeavyComponent2721({ config }: HeavyProps2721) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2721) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2721 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2721: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2721.displayName = 'HeavyComponent2721';
export default HeavyComponent2721;
