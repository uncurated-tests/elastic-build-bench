'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8502<T> = T extends (infer U)[]
  ? DeepReadonlyArray8502<U>
  : T extends object
  ? DeepReadonlyObject8502<T>
  : T;

interface DeepReadonlyArray8502<T> extends ReadonlyArray<DeepReadonly8502<T>> {}

type DeepReadonlyObject8502<T> = {
  readonly [P in keyof T]: DeepReadonly8502<T[P]>;
};

type UnionToIntersection8502<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8502<T> = UnionToIntersection8502<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8502<T extends unknown[], V> = [...T, V];

type TuplifyUnion8502<T, L = LastOf8502<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8502<TuplifyUnion8502<Exclude<T, L>>, L>;

type DeepPartial8502<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8502<T[P]> }
  : T;

type Paths8502<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8502<K, Paths8502<T[K], Prev8502[D]>> : never }[keyof T]
  : never;

type Prev8502 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8502<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8502 {
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

type ConfigPaths8502 = Paths8502<NestedConfig8502>;

interface HeavyProps8502 {
  config: DeepPartial8502<NestedConfig8502>;
  path?: ConfigPaths8502;
}

const HeavyComponent8502 = memo(function HeavyComponent8502({ config }: HeavyProps8502) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8502) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8502 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8502: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8502.displayName = 'HeavyComponent8502';
export default HeavyComponent8502;
