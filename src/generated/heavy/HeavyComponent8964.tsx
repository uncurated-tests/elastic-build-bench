'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8964<T> = T extends (infer U)[]
  ? DeepReadonlyArray8964<U>
  : T extends object
  ? DeepReadonlyObject8964<T>
  : T;

interface DeepReadonlyArray8964<T> extends ReadonlyArray<DeepReadonly8964<T>> {}

type DeepReadonlyObject8964<T> = {
  readonly [P in keyof T]: DeepReadonly8964<T[P]>;
};

type UnionToIntersection8964<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8964<T> = UnionToIntersection8964<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8964<T extends unknown[], V> = [...T, V];

type TuplifyUnion8964<T, L = LastOf8964<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8964<TuplifyUnion8964<Exclude<T, L>>, L>;

type DeepPartial8964<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8964<T[P]> }
  : T;

type Paths8964<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8964<K, Paths8964<T[K], Prev8964[D]>> : never }[keyof T]
  : never;

type Prev8964 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8964<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8964 {
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

type ConfigPaths8964 = Paths8964<NestedConfig8964>;

interface HeavyProps8964 {
  config: DeepPartial8964<NestedConfig8964>;
  path?: ConfigPaths8964;
}

const HeavyComponent8964 = memo(function HeavyComponent8964({ config }: HeavyProps8964) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8964) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8964 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8964: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8964.displayName = 'HeavyComponent8964';
export default HeavyComponent8964;
