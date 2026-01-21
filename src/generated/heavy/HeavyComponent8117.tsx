'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8117<T> = T extends (infer U)[]
  ? DeepReadonlyArray8117<U>
  : T extends object
  ? DeepReadonlyObject8117<T>
  : T;

interface DeepReadonlyArray8117<T> extends ReadonlyArray<DeepReadonly8117<T>> {}

type DeepReadonlyObject8117<T> = {
  readonly [P in keyof T]: DeepReadonly8117<T[P]>;
};

type UnionToIntersection8117<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8117<T> = UnionToIntersection8117<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8117<T extends unknown[], V> = [...T, V];

type TuplifyUnion8117<T, L = LastOf8117<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8117<TuplifyUnion8117<Exclude<T, L>>, L>;

type DeepPartial8117<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8117<T[P]> }
  : T;

type Paths8117<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8117<K, Paths8117<T[K], Prev8117[D]>> : never }[keyof T]
  : never;

type Prev8117 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8117<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8117 {
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

type ConfigPaths8117 = Paths8117<NestedConfig8117>;

interface HeavyProps8117 {
  config: DeepPartial8117<NestedConfig8117>;
  path?: ConfigPaths8117;
}

const HeavyComponent8117 = memo(function HeavyComponent8117({ config }: HeavyProps8117) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8117) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8117 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8117: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8117.displayName = 'HeavyComponent8117';
export default HeavyComponent8117;
