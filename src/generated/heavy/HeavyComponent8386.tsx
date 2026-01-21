'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8386<T> = T extends (infer U)[]
  ? DeepReadonlyArray8386<U>
  : T extends object
  ? DeepReadonlyObject8386<T>
  : T;

interface DeepReadonlyArray8386<T> extends ReadonlyArray<DeepReadonly8386<T>> {}

type DeepReadonlyObject8386<T> = {
  readonly [P in keyof T]: DeepReadonly8386<T[P]>;
};

type UnionToIntersection8386<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8386<T> = UnionToIntersection8386<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8386<T extends unknown[], V> = [...T, V];

type TuplifyUnion8386<T, L = LastOf8386<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8386<TuplifyUnion8386<Exclude<T, L>>, L>;

type DeepPartial8386<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8386<T[P]> }
  : T;

type Paths8386<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8386<K, Paths8386<T[K], Prev8386[D]>> : never }[keyof T]
  : never;

type Prev8386 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8386<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8386 {
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

type ConfigPaths8386 = Paths8386<NestedConfig8386>;

interface HeavyProps8386 {
  config: DeepPartial8386<NestedConfig8386>;
  path?: ConfigPaths8386;
}

const HeavyComponent8386 = memo(function HeavyComponent8386({ config }: HeavyProps8386) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8386) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8386 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8386: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8386.displayName = 'HeavyComponent8386';
export default HeavyComponent8386;
