'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly971<T> = T extends (infer U)[]
  ? DeepReadonlyArray971<U>
  : T extends object
  ? DeepReadonlyObject971<T>
  : T;

interface DeepReadonlyArray971<T> extends ReadonlyArray<DeepReadonly971<T>> {}

type DeepReadonlyObject971<T> = {
  readonly [P in keyof T]: DeepReadonly971<T[P]>;
};

type UnionToIntersection971<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf971<T> = UnionToIntersection971<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push971<T extends unknown[], V> = [...T, V];

type TuplifyUnion971<T, L = LastOf971<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push971<TuplifyUnion971<Exclude<T, L>>, L>;

type DeepPartial971<T> = T extends object
  ? { [P in keyof T]?: DeepPartial971<T[P]> }
  : T;

type Paths971<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join971<K, Paths971<T[K], Prev971[D]>> : never }[keyof T]
  : never;

type Prev971 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join971<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig971 {
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

type ConfigPaths971 = Paths971<NestedConfig971>;

interface HeavyProps971 {
  config: DeepPartial971<NestedConfig971>;
  path?: ConfigPaths971;
}

const HeavyComponent971 = memo(function HeavyComponent971({ config }: HeavyProps971) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 971) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-971 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H971: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent971.displayName = 'HeavyComponent971';
export default HeavyComponent971;
