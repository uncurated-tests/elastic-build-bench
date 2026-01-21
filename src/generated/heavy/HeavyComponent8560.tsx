'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8560<T> = T extends (infer U)[]
  ? DeepReadonlyArray8560<U>
  : T extends object
  ? DeepReadonlyObject8560<T>
  : T;

interface DeepReadonlyArray8560<T> extends ReadonlyArray<DeepReadonly8560<T>> {}

type DeepReadonlyObject8560<T> = {
  readonly [P in keyof T]: DeepReadonly8560<T[P]>;
};

type UnionToIntersection8560<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8560<T> = UnionToIntersection8560<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8560<T extends unknown[], V> = [...T, V];

type TuplifyUnion8560<T, L = LastOf8560<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8560<TuplifyUnion8560<Exclude<T, L>>, L>;

type DeepPartial8560<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8560<T[P]> }
  : T;

type Paths8560<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8560<K, Paths8560<T[K], Prev8560[D]>> : never }[keyof T]
  : never;

type Prev8560 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8560<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8560 {
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

type ConfigPaths8560 = Paths8560<NestedConfig8560>;

interface HeavyProps8560 {
  config: DeepPartial8560<NestedConfig8560>;
  path?: ConfigPaths8560;
}

const HeavyComponent8560 = memo(function HeavyComponent8560({ config }: HeavyProps8560) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8560) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8560 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8560: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8560.displayName = 'HeavyComponent8560';
export default HeavyComponent8560;
