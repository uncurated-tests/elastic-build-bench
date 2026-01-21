'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14455<T> = T extends (infer U)[]
  ? DeepReadonlyArray14455<U>
  : T extends object
  ? DeepReadonlyObject14455<T>
  : T;

interface DeepReadonlyArray14455<T> extends ReadonlyArray<DeepReadonly14455<T>> {}

type DeepReadonlyObject14455<T> = {
  readonly [P in keyof T]: DeepReadonly14455<T[P]>;
};

type UnionToIntersection14455<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14455<T> = UnionToIntersection14455<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14455<T extends unknown[], V> = [...T, V];

type TuplifyUnion14455<T, L = LastOf14455<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14455<TuplifyUnion14455<Exclude<T, L>>, L>;

type DeepPartial14455<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14455<T[P]> }
  : T;

type Paths14455<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14455<K, Paths14455<T[K], Prev14455[D]>> : never }[keyof T]
  : never;

type Prev14455 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14455<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14455 {
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

type ConfigPaths14455 = Paths14455<NestedConfig14455>;

interface HeavyProps14455 {
  config: DeepPartial14455<NestedConfig14455>;
  path?: ConfigPaths14455;
}

const HeavyComponent14455 = memo(function HeavyComponent14455({ config }: HeavyProps14455) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14455) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14455 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14455: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14455.displayName = 'HeavyComponent14455';
export default HeavyComponent14455;
