'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8307<T> = T extends (infer U)[]
  ? DeepReadonlyArray8307<U>
  : T extends object
  ? DeepReadonlyObject8307<T>
  : T;

interface DeepReadonlyArray8307<T> extends ReadonlyArray<DeepReadonly8307<T>> {}

type DeepReadonlyObject8307<T> = {
  readonly [P in keyof T]: DeepReadonly8307<T[P]>;
};

type UnionToIntersection8307<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8307<T> = UnionToIntersection8307<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8307<T extends unknown[], V> = [...T, V];

type TuplifyUnion8307<T, L = LastOf8307<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8307<TuplifyUnion8307<Exclude<T, L>>, L>;

type DeepPartial8307<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8307<T[P]> }
  : T;

type Paths8307<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8307<K, Paths8307<T[K], Prev8307[D]>> : never }[keyof T]
  : never;

type Prev8307 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8307<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8307 {
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

type ConfigPaths8307 = Paths8307<NestedConfig8307>;

interface HeavyProps8307 {
  config: DeepPartial8307<NestedConfig8307>;
  path?: ConfigPaths8307;
}

const HeavyComponent8307 = memo(function HeavyComponent8307({ config }: HeavyProps8307) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8307) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8307 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8307: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8307.displayName = 'HeavyComponent8307';
export default HeavyComponent8307;
