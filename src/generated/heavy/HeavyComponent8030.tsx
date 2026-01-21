'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8030<T> = T extends (infer U)[]
  ? DeepReadonlyArray8030<U>
  : T extends object
  ? DeepReadonlyObject8030<T>
  : T;

interface DeepReadonlyArray8030<T> extends ReadonlyArray<DeepReadonly8030<T>> {}

type DeepReadonlyObject8030<T> = {
  readonly [P in keyof T]: DeepReadonly8030<T[P]>;
};

type UnionToIntersection8030<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8030<T> = UnionToIntersection8030<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8030<T extends unknown[], V> = [...T, V];

type TuplifyUnion8030<T, L = LastOf8030<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8030<TuplifyUnion8030<Exclude<T, L>>, L>;

type DeepPartial8030<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8030<T[P]> }
  : T;

type Paths8030<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8030<K, Paths8030<T[K], Prev8030[D]>> : never }[keyof T]
  : never;

type Prev8030 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8030<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8030 {
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

type ConfigPaths8030 = Paths8030<NestedConfig8030>;

interface HeavyProps8030 {
  config: DeepPartial8030<NestedConfig8030>;
  path?: ConfigPaths8030;
}

const HeavyComponent8030 = memo(function HeavyComponent8030({ config }: HeavyProps8030) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8030) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8030 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8030: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8030.displayName = 'HeavyComponent8030';
export default HeavyComponent8030;
