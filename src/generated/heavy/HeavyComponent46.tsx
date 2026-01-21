'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly46<T> = T extends (infer U)[]
  ? DeepReadonlyArray46<U>
  : T extends object
  ? DeepReadonlyObject46<T>
  : T;

interface DeepReadonlyArray46<T> extends ReadonlyArray<DeepReadonly46<T>> {}

type DeepReadonlyObject46<T> = {
  readonly [P in keyof T]: DeepReadonly46<T[P]>;
};

type UnionToIntersection46<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf46<T> = UnionToIntersection46<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push46<T extends unknown[], V> = [...T, V];

type TuplifyUnion46<T, L = LastOf46<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push46<TuplifyUnion46<Exclude<T, L>>, L>;

type DeepPartial46<T> = T extends object
  ? { [P in keyof T]?: DeepPartial46<T[P]> }
  : T;

type Paths46<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join46<K, Paths46<T[K], Prev46[D]>> : never }[keyof T]
  : never;

type Prev46 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join46<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig46 {
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

type ConfigPaths46 = Paths46<NestedConfig46>;

interface HeavyProps46 {
  config: DeepPartial46<NestedConfig46>;
  path?: ConfigPaths46;
}

const HeavyComponent46 = memo(function HeavyComponent46({ config }: HeavyProps46) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 46) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-46 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H46: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent46.displayName = 'HeavyComponent46';
export default HeavyComponent46;
