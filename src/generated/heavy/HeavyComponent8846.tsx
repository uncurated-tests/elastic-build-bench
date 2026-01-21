'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8846<T> = T extends (infer U)[]
  ? DeepReadonlyArray8846<U>
  : T extends object
  ? DeepReadonlyObject8846<T>
  : T;

interface DeepReadonlyArray8846<T> extends ReadonlyArray<DeepReadonly8846<T>> {}

type DeepReadonlyObject8846<T> = {
  readonly [P in keyof T]: DeepReadonly8846<T[P]>;
};

type UnionToIntersection8846<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8846<T> = UnionToIntersection8846<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8846<T extends unknown[], V> = [...T, V];

type TuplifyUnion8846<T, L = LastOf8846<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8846<TuplifyUnion8846<Exclude<T, L>>, L>;

type DeepPartial8846<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8846<T[P]> }
  : T;

type Paths8846<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8846<K, Paths8846<T[K], Prev8846[D]>> : never }[keyof T]
  : never;

type Prev8846 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8846<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8846 {
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

type ConfigPaths8846 = Paths8846<NestedConfig8846>;

interface HeavyProps8846 {
  config: DeepPartial8846<NestedConfig8846>;
  path?: ConfigPaths8846;
}

const HeavyComponent8846 = memo(function HeavyComponent8846({ config }: HeavyProps8846) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8846) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8846 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8846: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8846.displayName = 'HeavyComponent8846';
export default HeavyComponent8846;
