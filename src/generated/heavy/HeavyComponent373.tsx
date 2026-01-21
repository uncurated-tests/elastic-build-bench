'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly373<T> = T extends (infer U)[]
  ? DeepReadonlyArray373<U>
  : T extends object
  ? DeepReadonlyObject373<T>
  : T;

interface DeepReadonlyArray373<T> extends ReadonlyArray<DeepReadonly373<T>> {}

type DeepReadonlyObject373<T> = {
  readonly [P in keyof T]: DeepReadonly373<T[P]>;
};

type UnionToIntersection373<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf373<T> = UnionToIntersection373<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push373<T extends unknown[], V> = [...T, V];

type TuplifyUnion373<T, L = LastOf373<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push373<TuplifyUnion373<Exclude<T, L>>, L>;

type DeepPartial373<T> = T extends object
  ? { [P in keyof T]?: DeepPartial373<T[P]> }
  : T;

type Paths373<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join373<K, Paths373<T[K], Prev373[D]>> : never }[keyof T]
  : never;

type Prev373 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join373<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig373 {
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

type ConfigPaths373 = Paths373<NestedConfig373>;

interface HeavyProps373 {
  config: DeepPartial373<NestedConfig373>;
  path?: ConfigPaths373;
}

const HeavyComponent373 = memo(function HeavyComponent373({ config }: HeavyProps373) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 373) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-373 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H373: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent373.displayName = 'HeavyComponent373';
export default HeavyComponent373;
