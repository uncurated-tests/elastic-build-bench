'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8728<T> = T extends (infer U)[]
  ? DeepReadonlyArray8728<U>
  : T extends object
  ? DeepReadonlyObject8728<T>
  : T;

interface DeepReadonlyArray8728<T> extends ReadonlyArray<DeepReadonly8728<T>> {}

type DeepReadonlyObject8728<T> = {
  readonly [P in keyof T]: DeepReadonly8728<T[P]>;
};

type UnionToIntersection8728<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8728<T> = UnionToIntersection8728<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8728<T extends unknown[], V> = [...T, V];

type TuplifyUnion8728<T, L = LastOf8728<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8728<TuplifyUnion8728<Exclude<T, L>>, L>;

type DeepPartial8728<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8728<T[P]> }
  : T;

type Paths8728<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8728<K, Paths8728<T[K], Prev8728[D]>> : never }[keyof T]
  : never;

type Prev8728 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8728<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8728 {
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

type ConfigPaths8728 = Paths8728<NestedConfig8728>;

interface HeavyProps8728 {
  config: DeepPartial8728<NestedConfig8728>;
  path?: ConfigPaths8728;
}

const HeavyComponent8728 = memo(function HeavyComponent8728({ config }: HeavyProps8728) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8728) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8728 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8728: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8728.displayName = 'HeavyComponent8728';
export default HeavyComponent8728;
