'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8145<T> = T extends (infer U)[]
  ? DeepReadonlyArray8145<U>
  : T extends object
  ? DeepReadonlyObject8145<T>
  : T;

interface DeepReadonlyArray8145<T> extends ReadonlyArray<DeepReadonly8145<T>> {}

type DeepReadonlyObject8145<T> = {
  readonly [P in keyof T]: DeepReadonly8145<T[P]>;
};

type UnionToIntersection8145<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8145<T> = UnionToIntersection8145<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8145<T extends unknown[], V> = [...T, V];

type TuplifyUnion8145<T, L = LastOf8145<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8145<TuplifyUnion8145<Exclude<T, L>>, L>;

type DeepPartial8145<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8145<T[P]> }
  : T;

type Paths8145<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8145<K, Paths8145<T[K], Prev8145[D]>> : never }[keyof T]
  : never;

type Prev8145 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8145<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8145 {
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

type ConfigPaths8145 = Paths8145<NestedConfig8145>;

interface HeavyProps8145 {
  config: DeepPartial8145<NestedConfig8145>;
  path?: ConfigPaths8145;
}

const HeavyComponent8145 = memo(function HeavyComponent8145({ config }: HeavyProps8145) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8145) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8145 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8145: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8145.displayName = 'HeavyComponent8145';
export default HeavyComponent8145;
