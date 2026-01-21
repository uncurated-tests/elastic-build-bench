'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8361<T> = T extends (infer U)[]
  ? DeepReadonlyArray8361<U>
  : T extends object
  ? DeepReadonlyObject8361<T>
  : T;

interface DeepReadonlyArray8361<T> extends ReadonlyArray<DeepReadonly8361<T>> {}

type DeepReadonlyObject8361<T> = {
  readonly [P in keyof T]: DeepReadonly8361<T[P]>;
};

type UnionToIntersection8361<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8361<T> = UnionToIntersection8361<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8361<T extends unknown[], V> = [...T, V];

type TuplifyUnion8361<T, L = LastOf8361<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8361<TuplifyUnion8361<Exclude<T, L>>, L>;

type DeepPartial8361<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8361<T[P]> }
  : T;

type Paths8361<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8361<K, Paths8361<T[K], Prev8361[D]>> : never }[keyof T]
  : never;

type Prev8361 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8361<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8361 {
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

type ConfigPaths8361 = Paths8361<NestedConfig8361>;

interface HeavyProps8361 {
  config: DeepPartial8361<NestedConfig8361>;
  path?: ConfigPaths8361;
}

const HeavyComponent8361 = memo(function HeavyComponent8361({ config }: HeavyProps8361) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8361) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8361 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8361: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8361.displayName = 'HeavyComponent8361';
export default HeavyComponent8361;
