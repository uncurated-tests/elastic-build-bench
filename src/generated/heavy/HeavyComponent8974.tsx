'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8974<T> = T extends (infer U)[]
  ? DeepReadonlyArray8974<U>
  : T extends object
  ? DeepReadonlyObject8974<T>
  : T;

interface DeepReadonlyArray8974<T> extends ReadonlyArray<DeepReadonly8974<T>> {}

type DeepReadonlyObject8974<T> = {
  readonly [P in keyof T]: DeepReadonly8974<T[P]>;
};

type UnionToIntersection8974<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8974<T> = UnionToIntersection8974<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8974<T extends unknown[], V> = [...T, V];

type TuplifyUnion8974<T, L = LastOf8974<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8974<TuplifyUnion8974<Exclude<T, L>>, L>;

type DeepPartial8974<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8974<T[P]> }
  : T;

type Paths8974<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8974<K, Paths8974<T[K], Prev8974[D]>> : never }[keyof T]
  : never;

type Prev8974 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8974<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8974 {
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

type ConfigPaths8974 = Paths8974<NestedConfig8974>;

interface HeavyProps8974 {
  config: DeepPartial8974<NestedConfig8974>;
  path?: ConfigPaths8974;
}

const HeavyComponent8974 = memo(function HeavyComponent8974({ config }: HeavyProps8974) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8974) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8974 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8974: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8974.displayName = 'HeavyComponent8974';
export default HeavyComponent8974;
