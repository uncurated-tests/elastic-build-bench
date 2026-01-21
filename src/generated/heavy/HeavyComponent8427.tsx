'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8427<T> = T extends (infer U)[]
  ? DeepReadonlyArray8427<U>
  : T extends object
  ? DeepReadonlyObject8427<T>
  : T;

interface DeepReadonlyArray8427<T> extends ReadonlyArray<DeepReadonly8427<T>> {}

type DeepReadonlyObject8427<T> = {
  readonly [P in keyof T]: DeepReadonly8427<T[P]>;
};

type UnionToIntersection8427<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8427<T> = UnionToIntersection8427<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8427<T extends unknown[], V> = [...T, V];

type TuplifyUnion8427<T, L = LastOf8427<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8427<TuplifyUnion8427<Exclude<T, L>>, L>;

type DeepPartial8427<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8427<T[P]> }
  : T;

type Paths8427<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8427<K, Paths8427<T[K], Prev8427[D]>> : never }[keyof T]
  : never;

type Prev8427 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8427<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8427 {
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

type ConfigPaths8427 = Paths8427<NestedConfig8427>;

interface HeavyProps8427 {
  config: DeepPartial8427<NestedConfig8427>;
  path?: ConfigPaths8427;
}

const HeavyComponent8427 = memo(function HeavyComponent8427({ config }: HeavyProps8427) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8427) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8427 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8427: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8427.displayName = 'HeavyComponent8427';
export default HeavyComponent8427;
