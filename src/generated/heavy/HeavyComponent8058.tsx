'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8058<T> = T extends (infer U)[]
  ? DeepReadonlyArray8058<U>
  : T extends object
  ? DeepReadonlyObject8058<T>
  : T;

interface DeepReadonlyArray8058<T> extends ReadonlyArray<DeepReadonly8058<T>> {}

type DeepReadonlyObject8058<T> = {
  readonly [P in keyof T]: DeepReadonly8058<T[P]>;
};

type UnionToIntersection8058<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8058<T> = UnionToIntersection8058<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8058<T extends unknown[], V> = [...T, V];

type TuplifyUnion8058<T, L = LastOf8058<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8058<TuplifyUnion8058<Exclude<T, L>>, L>;

type DeepPartial8058<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8058<T[P]> }
  : T;

type Paths8058<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8058<K, Paths8058<T[K], Prev8058[D]>> : never }[keyof T]
  : never;

type Prev8058 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8058<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8058 {
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

type ConfigPaths8058 = Paths8058<NestedConfig8058>;

interface HeavyProps8058 {
  config: DeepPartial8058<NestedConfig8058>;
  path?: ConfigPaths8058;
}

const HeavyComponent8058 = memo(function HeavyComponent8058({ config }: HeavyProps8058) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8058) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8058 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8058: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8058.displayName = 'HeavyComponent8058';
export default HeavyComponent8058;
