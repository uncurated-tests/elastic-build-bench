'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8965<T> = T extends (infer U)[]
  ? DeepReadonlyArray8965<U>
  : T extends object
  ? DeepReadonlyObject8965<T>
  : T;

interface DeepReadonlyArray8965<T> extends ReadonlyArray<DeepReadonly8965<T>> {}

type DeepReadonlyObject8965<T> = {
  readonly [P in keyof T]: DeepReadonly8965<T[P]>;
};

type UnionToIntersection8965<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8965<T> = UnionToIntersection8965<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8965<T extends unknown[], V> = [...T, V];

type TuplifyUnion8965<T, L = LastOf8965<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8965<TuplifyUnion8965<Exclude<T, L>>, L>;

type DeepPartial8965<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8965<T[P]> }
  : T;

type Paths8965<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8965<K, Paths8965<T[K], Prev8965[D]>> : never }[keyof T]
  : never;

type Prev8965 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8965<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8965 {
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

type ConfigPaths8965 = Paths8965<NestedConfig8965>;

interface HeavyProps8965 {
  config: DeepPartial8965<NestedConfig8965>;
  path?: ConfigPaths8965;
}

const HeavyComponent8965 = memo(function HeavyComponent8965({ config }: HeavyProps8965) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8965) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8965 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8965: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8965.displayName = 'HeavyComponent8965';
export default HeavyComponent8965;
