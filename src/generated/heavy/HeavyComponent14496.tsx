'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14496<T> = T extends (infer U)[]
  ? DeepReadonlyArray14496<U>
  : T extends object
  ? DeepReadonlyObject14496<T>
  : T;

interface DeepReadonlyArray14496<T> extends ReadonlyArray<DeepReadonly14496<T>> {}

type DeepReadonlyObject14496<T> = {
  readonly [P in keyof T]: DeepReadonly14496<T[P]>;
};

type UnionToIntersection14496<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14496<T> = UnionToIntersection14496<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14496<T extends unknown[], V> = [...T, V];

type TuplifyUnion14496<T, L = LastOf14496<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14496<TuplifyUnion14496<Exclude<T, L>>, L>;

type DeepPartial14496<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14496<T[P]> }
  : T;

type Paths14496<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14496<K, Paths14496<T[K], Prev14496[D]>> : never }[keyof T]
  : never;

type Prev14496 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14496<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14496 {
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

type ConfigPaths14496 = Paths14496<NestedConfig14496>;

interface HeavyProps14496 {
  config: DeepPartial14496<NestedConfig14496>;
  path?: ConfigPaths14496;
}

const HeavyComponent14496 = memo(function HeavyComponent14496({ config }: HeavyProps14496) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14496) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14496 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14496: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14496.displayName = 'HeavyComponent14496';
export default HeavyComponent14496;
