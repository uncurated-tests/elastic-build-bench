'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8108<T> = T extends (infer U)[]
  ? DeepReadonlyArray8108<U>
  : T extends object
  ? DeepReadonlyObject8108<T>
  : T;

interface DeepReadonlyArray8108<T> extends ReadonlyArray<DeepReadonly8108<T>> {}

type DeepReadonlyObject8108<T> = {
  readonly [P in keyof T]: DeepReadonly8108<T[P]>;
};

type UnionToIntersection8108<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8108<T> = UnionToIntersection8108<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8108<T extends unknown[], V> = [...T, V];

type TuplifyUnion8108<T, L = LastOf8108<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8108<TuplifyUnion8108<Exclude<T, L>>, L>;

type DeepPartial8108<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8108<T[P]> }
  : T;

type Paths8108<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8108<K, Paths8108<T[K], Prev8108[D]>> : never }[keyof T]
  : never;

type Prev8108 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8108<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8108 {
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

type ConfigPaths8108 = Paths8108<NestedConfig8108>;

interface HeavyProps8108 {
  config: DeepPartial8108<NestedConfig8108>;
  path?: ConfigPaths8108;
}

const HeavyComponent8108 = memo(function HeavyComponent8108({ config }: HeavyProps8108) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8108) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8108 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8108: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8108.displayName = 'HeavyComponent8108';
export default HeavyComponent8108;
