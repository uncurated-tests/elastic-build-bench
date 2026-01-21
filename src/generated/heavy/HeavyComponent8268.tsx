'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8268<T> = T extends (infer U)[]
  ? DeepReadonlyArray8268<U>
  : T extends object
  ? DeepReadonlyObject8268<T>
  : T;

interface DeepReadonlyArray8268<T> extends ReadonlyArray<DeepReadonly8268<T>> {}

type DeepReadonlyObject8268<T> = {
  readonly [P in keyof T]: DeepReadonly8268<T[P]>;
};

type UnionToIntersection8268<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8268<T> = UnionToIntersection8268<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8268<T extends unknown[], V> = [...T, V];

type TuplifyUnion8268<T, L = LastOf8268<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8268<TuplifyUnion8268<Exclude<T, L>>, L>;

type DeepPartial8268<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8268<T[P]> }
  : T;

type Paths8268<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8268<K, Paths8268<T[K], Prev8268[D]>> : never }[keyof T]
  : never;

type Prev8268 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8268<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8268 {
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

type ConfigPaths8268 = Paths8268<NestedConfig8268>;

interface HeavyProps8268 {
  config: DeepPartial8268<NestedConfig8268>;
  path?: ConfigPaths8268;
}

const HeavyComponent8268 = memo(function HeavyComponent8268({ config }: HeavyProps8268) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8268) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8268 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8268: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8268.displayName = 'HeavyComponent8268';
export default HeavyComponent8268;
