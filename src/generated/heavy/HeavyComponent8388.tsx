'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8388<T> = T extends (infer U)[]
  ? DeepReadonlyArray8388<U>
  : T extends object
  ? DeepReadonlyObject8388<T>
  : T;

interface DeepReadonlyArray8388<T> extends ReadonlyArray<DeepReadonly8388<T>> {}

type DeepReadonlyObject8388<T> = {
  readonly [P in keyof T]: DeepReadonly8388<T[P]>;
};

type UnionToIntersection8388<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8388<T> = UnionToIntersection8388<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8388<T extends unknown[], V> = [...T, V];

type TuplifyUnion8388<T, L = LastOf8388<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8388<TuplifyUnion8388<Exclude<T, L>>, L>;

type DeepPartial8388<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8388<T[P]> }
  : T;

type Paths8388<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8388<K, Paths8388<T[K], Prev8388[D]>> : never }[keyof T]
  : never;

type Prev8388 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8388<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8388 {
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

type ConfigPaths8388 = Paths8388<NestedConfig8388>;

interface HeavyProps8388 {
  config: DeepPartial8388<NestedConfig8388>;
  path?: ConfigPaths8388;
}

const HeavyComponent8388 = memo(function HeavyComponent8388({ config }: HeavyProps8388) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8388) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8388 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8388: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8388.displayName = 'HeavyComponent8388';
export default HeavyComponent8388;
