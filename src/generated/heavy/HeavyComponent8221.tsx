'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8221<T> = T extends (infer U)[]
  ? DeepReadonlyArray8221<U>
  : T extends object
  ? DeepReadonlyObject8221<T>
  : T;

interface DeepReadonlyArray8221<T> extends ReadonlyArray<DeepReadonly8221<T>> {}

type DeepReadonlyObject8221<T> = {
  readonly [P in keyof T]: DeepReadonly8221<T[P]>;
};

type UnionToIntersection8221<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8221<T> = UnionToIntersection8221<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8221<T extends unknown[], V> = [...T, V];

type TuplifyUnion8221<T, L = LastOf8221<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8221<TuplifyUnion8221<Exclude<T, L>>, L>;

type DeepPartial8221<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8221<T[P]> }
  : T;

type Paths8221<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8221<K, Paths8221<T[K], Prev8221[D]>> : never }[keyof T]
  : never;

type Prev8221 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8221<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8221 {
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

type ConfigPaths8221 = Paths8221<NestedConfig8221>;

interface HeavyProps8221 {
  config: DeepPartial8221<NestedConfig8221>;
  path?: ConfigPaths8221;
}

const HeavyComponent8221 = memo(function HeavyComponent8221({ config }: HeavyProps8221) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8221) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8221 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8221: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8221.displayName = 'HeavyComponent8221';
export default HeavyComponent8221;
