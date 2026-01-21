'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8764<T> = T extends (infer U)[]
  ? DeepReadonlyArray8764<U>
  : T extends object
  ? DeepReadonlyObject8764<T>
  : T;

interface DeepReadonlyArray8764<T> extends ReadonlyArray<DeepReadonly8764<T>> {}

type DeepReadonlyObject8764<T> = {
  readonly [P in keyof T]: DeepReadonly8764<T[P]>;
};

type UnionToIntersection8764<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8764<T> = UnionToIntersection8764<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8764<T extends unknown[], V> = [...T, V];

type TuplifyUnion8764<T, L = LastOf8764<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8764<TuplifyUnion8764<Exclude<T, L>>, L>;

type DeepPartial8764<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8764<T[P]> }
  : T;

type Paths8764<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8764<K, Paths8764<T[K], Prev8764[D]>> : never }[keyof T]
  : never;

type Prev8764 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8764<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8764 {
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

type ConfigPaths8764 = Paths8764<NestedConfig8764>;

interface HeavyProps8764 {
  config: DeepPartial8764<NestedConfig8764>;
  path?: ConfigPaths8764;
}

const HeavyComponent8764 = memo(function HeavyComponent8764({ config }: HeavyProps8764) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8764) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8764 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8764: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8764.displayName = 'HeavyComponent8764';
export default HeavyComponent8764;
