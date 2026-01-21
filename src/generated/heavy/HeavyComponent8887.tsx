'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8887<T> = T extends (infer U)[]
  ? DeepReadonlyArray8887<U>
  : T extends object
  ? DeepReadonlyObject8887<T>
  : T;

interface DeepReadonlyArray8887<T> extends ReadonlyArray<DeepReadonly8887<T>> {}

type DeepReadonlyObject8887<T> = {
  readonly [P in keyof T]: DeepReadonly8887<T[P]>;
};

type UnionToIntersection8887<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8887<T> = UnionToIntersection8887<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8887<T extends unknown[], V> = [...T, V];

type TuplifyUnion8887<T, L = LastOf8887<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8887<TuplifyUnion8887<Exclude<T, L>>, L>;

type DeepPartial8887<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8887<T[P]> }
  : T;

type Paths8887<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8887<K, Paths8887<T[K], Prev8887[D]>> : never }[keyof T]
  : never;

type Prev8887 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8887<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8887 {
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

type ConfigPaths8887 = Paths8887<NestedConfig8887>;

interface HeavyProps8887 {
  config: DeepPartial8887<NestedConfig8887>;
  path?: ConfigPaths8887;
}

const HeavyComponent8887 = memo(function HeavyComponent8887({ config }: HeavyProps8887) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8887) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8887 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8887: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8887.displayName = 'HeavyComponent8887';
export default HeavyComponent8887;
