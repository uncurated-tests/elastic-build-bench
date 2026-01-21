'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8017<T> = T extends (infer U)[]
  ? DeepReadonlyArray8017<U>
  : T extends object
  ? DeepReadonlyObject8017<T>
  : T;

interface DeepReadonlyArray8017<T> extends ReadonlyArray<DeepReadonly8017<T>> {}

type DeepReadonlyObject8017<T> = {
  readonly [P in keyof T]: DeepReadonly8017<T[P]>;
};

type UnionToIntersection8017<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8017<T> = UnionToIntersection8017<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8017<T extends unknown[], V> = [...T, V];

type TuplifyUnion8017<T, L = LastOf8017<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8017<TuplifyUnion8017<Exclude<T, L>>, L>;

type DeepPartial8017<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8017<T[P]> }
  : T;

type Paths8017<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8017<K, Paths8017<T[K], Prev8017[D]>> : never }[keyof T]
  : never;

type Prev8017 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8017<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8017 {
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

type ConfigPaths8017 = Paths8017<NestedConfig8017>;

interface HeavyProps8017 {
  config: DeepPartial8017<NestedConfig8017>;
  path?: ConfigPaths8017;
}

const HeavyComponent8017 = memo(function HeavyComponent8017({ config }: HeavyProps8017) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8017) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8017 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8017: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8017.displayName = 'HeavyComponent8017';
export default HeavyComponent8017;
