'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8101<T> = T extends (infer U)[]
  ? DeepReadonlyArray8101<U>
  : T extends object
  ? DeepReadonlyObject8101<T>
  : T;

interface DeepReadonlyArray8101<T> extends ReadonlyArray<DeepReadonly8101<T>> {}

type DeepReadonlyObject8101<T> = {
  readonly [P in keyof T]: DeepReadonly8101<T[P]>;
};

type UnionToIntersection8101<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8101<T> = UnionToIntersection8101<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8101<T extends unknown[], V> = [...T, V];

type TuplifyUnion8101<T, L = LastOf8101<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8101<TuplifyUnion8101<Exclude<T, L>>, L>;

type DeepPartial8101<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8101<T[P]> }
  : T;

type Paths8101<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8101<K, Paths8101<T[K], Prev8101[D]>> : never }[keyof T]
  : never;

type Prev8101 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8101<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8101 {
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

type ConfigPaths8101 = Paths8101<NestedConfig8101>;

interface HeavyProps8101 {
  config: DeepPartial8101<NestedConfig8101>;
  path?: ConfigPaths8101;
}

const HeavyComponent8101 = memo(function HeavyComponent8101({ config }: HeavyProps8101) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8101) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8101 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8101: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8101.displayName = 'HeavyComponent8101';
export default HeavyComponent8101;
