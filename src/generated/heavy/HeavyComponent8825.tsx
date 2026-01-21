'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8825<T> = T extends (infer U)[]
  ? DeepReadonlyArray8825<U>
  : T extends object
  ? DeepReadonlyObject8825<T>
  : T;

interface DeepReadonlyArray8825<T> extends ReadonlyArray<DeepReadonly8825<T>> {}

type DeepReadonlyObject8825<T> = {
  readonly [P in keyof T]: DeepReadonly8825<T[P]>;
};

type UnionToIntersection8825<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8825<T> = UnionToIntersection8825<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8825<T extends unknown[], V> = [...T, V];

type TuplifyUnion8825<T, L = LastOf8825<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8825<TuplifyUnion8825<Exclude<T, L>>, L>;

type DeepPartial8825<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8825<T[P]> }
  : T;

type Paths8825<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8825<K, Paths8825<T[K], Prev8825[D]>> : never }[keyof T]
  : never;

type Prev8825 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8825<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8825 {
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

type ConfigPaths8825 = Paths8825<NestedConfig8825>;

interface HeavyProps8825 {
  config: DeepPartial8825<NestedConfig8825>;
  path?: ConfigPaths8825;
}

const HeavyComponent8825 = memo(function HeavyComponent8825({ config }: HeavyProps8825) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8825) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8825 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8825: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8825.displayName = 'HeavyComponent8825';
export default HeavyComponent8825;
