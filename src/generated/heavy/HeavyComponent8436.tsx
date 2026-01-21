'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8436<T> = T extends (infer U)[]
  ? DeepReadonlyArray8436<U>
  : T extends object
  ? DeepReadonlyObject8436<T>
  : T;

interface DeepReadonlyArray8436<T> extends ReadonlyArray<DeepReadonly8436<T>> {}

type DeepReadonlyObject8436<T> = {
  readonly [P in keyof T]: DeepReadonly8436<T[P]>;
};

type UnionToIntersection8436<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8436<T> = UnionToIntersection8436<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8436<T extends unknown[], V> = [...T, V];

type TuplifyUnion8436<T, L = LastOf8436<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8436<TuplifyUnion8436<Exclude<T, L>>, L>;

type DeepPartial8436<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8436<T[P]> }
  : T;

type Paths8436<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8436<K, Paths8436<T[K], Prev8436[D]>> : never }[keyof T]
  : never;

type Prev8436 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8436<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8436 {
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

type ConfigPaths8436 = Paths8436<NestedConfig8436>;

interface HeavyProps8436 {
  config: DeepPartial8436<NestedConfig8436>;
  path?: ConfigPaths8436;
}

const HeavyComponent8436 = memo(function HeavyComponent8436({ config }: HeavyProps8436) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8436) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8436 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8436: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8436.displayName = 'HeavyComponent8436';
export default HeavyComponent8436;
