'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8713<T> = T extends (infer U)[]
  ? DeepReadonlyArray8713<U>
  : T extends object
  ? DeepReadonlyObject8713<T>
  : T;

interface DeepReadonlyArray8713<T> extends ReadonlyArray<DeepReadonly8713<T>> {}

type DeepReadonlyObject8713<T> = {
  readonly [P in keyof T]: DeepReadonly8713<T[P]>;
};

type UnionToIntersection8713<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8713<T> = UnionToIntersection8713<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8713<T extends unknown[], V> = [...T, V];

type TuplifyUnion8713<T, L = LastOf8713<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8713<TuplifyUnion8713<Exclude<T, L>>, L>;

type DeepPartial8713<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8713<T[P]> }
  : T;

type Paths8713<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8713<K, Paths8713<T[K], Prev8713[D]>> : never }[keyof T]
  : never;

type Prev8713 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8713<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8713 {
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

type ConfigPaths8713 = Paths8713<NestedConfig8713>;

interface HeavyProps8713 {
  config: DeepPartial8713<NestedConfig8713>;
  path?: ConfigPaths8713;
}

const HeavyComponent8713 = memo(function HeavyComponent8713({ config }: HeavyProps8713) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8713) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8713 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8713: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8713.displayName = 'HeavyComponent8713';
export default HeavyComponent8713;
