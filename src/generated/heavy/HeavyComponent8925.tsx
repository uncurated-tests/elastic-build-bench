'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8925<T> = T extends (infer U)[]
  ? DeepReadonlyArray8925<U>
  : T extends object
  ? DeepReadonlyObject8925<T>
  : T;

interface DeepReadonlyArray8925<T> extends ReadonlyArray<DeepReadonly8925<T>> {}

type DeepReadonlyObject8925<T> = {
  readonly [P in keyof T]: DeepReadonly8925<T[P]>;
};

type UnionToIntersection8925<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8925<T> = UnionToIntersection8925<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8925<T extends unknown[], V> = [...T, V];

type TuplifyUnion8925<T, L = LastOf8925<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8925<TuplifyUnion8925<Exclude<T, L>>, L>;

type DeepPartial8925<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8925<T[P]> }
  : T;

type Paths8925<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8925<K, Paths8925<T[K], Prev8925[D]>> : never }[keyof T]
  : never;

type Prev8925 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8925<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8925 {
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

type ConfigPaths8925 = Paths8925<NestedConfig8925>;

interface HeavyProps8925 {
  config: DeepPartial8925<NestedConfig8925>;
  path?: ConfigPaths8925;
}

const HeavyComponent8925 = memo(function HeavyComponent8925({ config }: HeavyProps8925) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8925) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8925 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8925: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8925.displayName = 'HeavyComponent8925';
export default HeavyComponent8925;
