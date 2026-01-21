'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8654<T> = T extends (infer U)[]
  ? DeepReadonlyArray8654<U>
  : T extends object
  ? DeepReadonlyObject8654<T>
  : T;

interface DeepReadonlyArray8654<T> extends ReadonlyArray<DeepReadonly8654<T>> {}

type DeepReadonlyObject8654<T> = {
  readonly [P in keyof T]: DeepReadonly8654<T[P]>;
};

type UnionToIntersection8654<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8654<T> = UnionToIntersection8654<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8654<T extends unknown[], V> = [...T, V];

type TuplifyUnion8654<T, L = LastOf8654<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8654<TuplifyUnion8654<Exclude<T, L>>, L>;

type DeepPartial8654<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8654<T[P]> }
  : T;

type Paths8654<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8654<K, Paths8654<T[K], Prev8654[D]>> : never }[keyof T]
  : never;

type Prev8654 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8654<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8654 {
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

type ConfigPaths8654 = Paths8654<NestedConfig8654>;

interface HeavyProps8654 {
  config: DeepPartial8654<NestedConfig8654>;
  path?: ConfigPaths8654;
}

const HeavyComponent8654 = memo(function HeavyComponent8654({ config }: HeavyProps8654) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8654) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8654 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8654: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8654.displayName = 'HeavyComponent8654';
export default HeavyComponent8654;
