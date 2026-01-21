'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8971<T> = T extends (infer U)[]
  ? DeepReadonlyArray8971<U>
  : T extends object
  ? DeepReadonlyObject8971<T>
  : T;

interface DeepReadonlyArray8971<T> extends ReadonlyArray<DeepReadonly8971<T>> {}

type DeepReadonlyObject8971<T> = {
  readonly [P in keyof T]: DeepReadonly8971<T[P]>;
};

type UnionToIntersection8971<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8971<T> = UnionToIntersection8971<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8971<T extends unknown[], V> = [...T, V];

type TuplifyUnion8971<T, L = LastOf8971<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8971<TuplifyUnion8971<Exclude<T, L>>, L>;

type DeepPartial8971<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8971<T[P]> }
  : T;

type Paths8971<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8971<K, Paths8971<T[K], Prev8971[D]>> : never }[keyof T]
  : never;

type Prev8971 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8971<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8971 {
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

type ConfigPaths8971 = Paths8971<NestedConfig8971>;

interface HeavyProps8971 {
  config: DeepPartial8971<NestedConfig8971>;
  path?: ConfigPaths8971;
}

const HeavyComponent8971 = memo(function HeavyComponent8971({ config }: HeavyProps8971) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8971) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8971 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8971: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8971.displayName = 'HeavyComponent8971';
export default HeavyComponent8971;
